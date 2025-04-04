export default defineNuxtRouteMiddleware(async (to) => {
  // If auth is disabled, skip middleware
  if (to.meta?.auth === false) {
    return
  }
  const { loggedIn, fetchSession } = useAuth()

  // If client-side, fetch session between each navigation
  if (import.meta.client) {
    await fetchSession()
  }
  // If not authenticated, redirect to home
  if (!loggedIn.value && to.path !== '/') {
    return navigateTo('/')
  }
})