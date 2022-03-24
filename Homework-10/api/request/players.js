export const playersApi = {
    senPlayers: async () => {
        console.log('origin sendPlayer')
        return new Promise((resolve) => {
            setTimeout(resolve, 500);
        })
    }
}