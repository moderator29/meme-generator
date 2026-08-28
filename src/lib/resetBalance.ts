// Force clear all balance-related localStorage on app load
export function resetBalance() {
  if (typeof window === "undefined") return;
  try {
    // Clear all EC-related storage
    localStorage.removeItem("ec_deposits_v1");
    localStorage.removeItem("ec_withdraws_v1");
    localStorage.removeItem("ec_balance_cache");
    localStorage.removeItem("ec_total_deposited");
    localStorage.removeItem("ec_total_withdrawn");
    
    // Clear service worker cache
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  } catch {
    /* ignore */
  }
}
