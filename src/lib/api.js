export const postReservation = async (data) => {
  // Pour l'instant, nous simulons juste un appel API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Réservation reçue:', data);
      resolve({ success: true });
    }, 1000);
  });
}; 