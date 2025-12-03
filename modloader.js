async function loadMods() {
    const mods = [
        "typing-system/typing.js",
        "chat/chat.js"
    ];

    for (let mod of mods) {
        try {
            await import(`./${mod}`);
        } catch (err) {
            console.error("Failed to load mod:", mod, err);
        }
    }
}

loadMods();
