"use strict";

const baseCrudUrl = 'http://localhost:8080/admin/users/';

const pills = document.querySelectorAll('.pill');
const pillsContent = document.querySelectorAll('.pillContent');
pills.forEach((clickedPill) => {
    clickedPill.addEventListener('click', async () => {
        pills.forEach((pill) => {
            pill.classList.remove('active');
        });
        clickedPill.classList.add('active');
        let tabId = clickedPill.getAttribute('id');
        await activePillContent(tabId);
    });
});

async function activePillContent(tabId) {
    pillsContent.forEach((clickedPillContent) => {
        clickedPillContent.classList.contains(tabId) ?
            clickedPillContent.classList.add('active') :
            clickedPillContent.classList.remove('active');
    })
}

const tabs = document.querySelectorAll('.taba');
const tabsContent = document.querySelectorAll('.tabaContent');
tabs.forEach((clickedTab) => {
    clickedTab.addEventListener('click', async () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');
        let tabaId = clickedTab.getAttribute('id');
        await activeTabContent(tabaId);
    });
});

async function activeTabContent(tabaId) {
    tabsContent.forEach((clickedTabContent) => {
        clickedTabContent.classList.contains(tabaId) ?
            clickedTabContent.classList.add('active') :
            clickedTabContent.classList.remove('active');
    })
}



