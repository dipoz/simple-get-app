

const getItem = async url => {
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.text();
        return { error, items: [] };
    }
    const items = await response.json();

    return { error: null, items };
};

export default getItem;

