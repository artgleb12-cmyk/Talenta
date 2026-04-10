import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'profile-photo-data-url'
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024
const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/jpg', 'image/png', 'image/webp'])

function isStorageAvailable() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
  } catch {
    return false
  }
}

function readStoredAvatarUrl(): string | null {
  if (!isStorageAvailable()) {
    return null
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStoredAvatarUrl(avatarUrl: string | null) {
  if (!isStorageAvailable()) {
    throw new Error('Хранилище недоступно')
  }

  if (avatarUrl === null) {
    window.localStorage.removeItem(STORAGE_KEY)
    return
  }

  window.localStorage.setItem(STORAGE_KEY, avatarUrl)
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
        return
      }

      reject(new Error('Не удалось прочитать файл'))
    }

    reader.onerror = () => {
      reject(new Error('Не удалось прочитать файл'))
    }

    reader.readAsDataURL(file)
  })
}

export function useProfilePhoto() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(() => readStoredAvatarUrl())
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setAvatarUrl(readStoredAvatarUrl())
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const uploadPhoto = useCallback(async (file: File): Promise<boolean> => {
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      setError('Поддерживаются только файлы JPG, PNG или WebP.')
      return false
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('Размер файла не должен превышать 5 МБ.')
      return false
    }

    setIsUploading(true)

    try {
      const dataUrl = await fileToDataUrl(file)

      try {
        writeStoredAvatarUrl(dataUrl)
      } catch {
        setError('Не удалось сохранить фото профиля: локальное хранилище недоступно.')
        return false
      }

      setAvatarUrl(dataUrl)
      setError(null)
      return true
    } catch {
      setError('Не удалось загрузить фото профиля. Попробуйте снова.')
      return false
    } finally {
      setIsUploading(false)
    }
  }, [])

  return {
    avatarUrl,
    uploadPhoto,
    error,
    clearError,
  }
}
