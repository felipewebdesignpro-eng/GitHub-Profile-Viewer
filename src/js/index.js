import { fetchUserProfile } from './api.js';
import { clearResults, renderLoading, renderUserProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        clearResults(profileResults);
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await fetchUserProfile(userName);
        renderUserProfile(profileResults, userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);

        if (error.message === 'USER_NOT_FOUND') {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        } else {
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }

        clearResults(profileResults);
    }
});
