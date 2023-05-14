"use strict";

window.addEventListener('DOMContentLoaded', getMyUser);

const profilePath = '/api/auth';

async function getMyUser() {
    let res = await fetch(profilePath);
    let resUser = await res.json();
    userNavbarDetails(resUser);
}

function userNavbarDetails(resUser) {
    let currentUserInfo = document.getElementById('currentUserDetails');
    let roles = '';

    for (let role of resUser.roles) {
        roles += role.name + ' ';
    }

    currentUserInfo.insertAdjacentHTML('beforeend',
        `<b> ${resUser.username} </b> with roles: <a>${roles} </a>`);
}

window.addEventListener('DOMContentLoaded', loadUserTable);

async function loadUserTable() {
    let tableBody = document.getElementById('tableUser');
    let page = await fetch(profilePath);
    let currentUser;

    if (page.ok) {
        currentUser = await page.json();
    } else {
        alert(`Error, ${page.status}`)
    }

    let roles = [];
    for (let role of currentUser.roles) {
        roles.push(" " + role.name)
    }

    tableBody.innerHTML = `<tr>
    <td>${currentUser.id}</td>
    <td>${currentUser.username}</td>
    <td>${currentUser.firstName}</td>
    <td>${currentUser.lastName}</td>
    <td>${currentUser.email}</td>
    <td>${roles}</td></tr>`;
}