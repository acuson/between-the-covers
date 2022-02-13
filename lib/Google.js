const Google = {
    fetchById: async id => {
        const response = await fetch(`/api/google/${id}`);
        return response;
    },
};
