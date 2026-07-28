const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        throw new Error('USER_NOT_FOUND');
    }

    return response.json();
}
