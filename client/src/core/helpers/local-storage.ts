export const LocalStorageService = {
	get(key: string): string {
		return localStorage.getItem(key);
	},
	save(key: string, value: string): void {
		try {
			localStorage.setItem(key, value);
		} catch {
			// if local storage quota is exceeded
			return;
		}
	},
	delete(key: string): void {
		localStorage.removeItem(key);
	}
}