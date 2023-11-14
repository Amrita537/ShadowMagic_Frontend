function openTab(tabId) {
    const tabContentItems = document.querySelectorAll('.tab-content-item');
    const tabs = document.querySelectorAll('.tab');

    tabContentItems.forEach((tabContent) => {
        tabContent.classList.remove('active');
    });

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[id="${tabId}"]`).classList.add('active');
}

function closeTab(tabId) {
    document.getElementById(tabId).classList.remove('active');
    document.querySelector(`[id="${tabId}"]`).classList.remove('active');
}
