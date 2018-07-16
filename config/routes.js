exports['default'] = {
  routes: (api) => {
    return {
      all: [
        { path: '/', action: 'homepage' },
        { path: '/', action: 'track', matchTrailingPathParts: true }
      ]
    }
  }
}
