export const applyFilter = filter => ({ type: 'APPLY_FILTER', filter })
export const imageUploaded = image => ({ type: 'IMAGE_UPLOADED', image })
export const imageDownloading = isImageDownloading => ({ type: 'IMAGE_DOWNLOADING', isImageDownloading })

export const openPopup = name => ({ type: 'POPUP_OPEN', name })
export const closePopup = name => ({ type: 'POPUP_CLOSE', name })
