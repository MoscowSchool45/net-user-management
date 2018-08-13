const api_mock = {
    'login': (username, password) => {
        if (username === 'test' && password === 'test') {
            return { 'user': username, 'role': 'engineer' }
        } else {
            throw new Error('Login failed')
        }
    },
    'logout': () => {}
};

export default api_mock;
