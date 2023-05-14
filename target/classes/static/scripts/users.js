"use strict";

getAdminPage();

async function getAdminPage() {
    let page = await fetch(baseCrudUrl);
    if (page.ok) {
        let listAllUser = await page.json();
        loadTableData(listAllUser);
    } else {
        alert(`Error, ${page.status}`)
    }
}

function loadTableData(listAllUser) {
    let tableBody = document.getElementById('tbody');
    let dataHtml = '';
    for (let user of listAllUser) {
        let roles = [];
        for (let role of user.roles) {
            roles.push(" " + role.name)
        }
        dataHtml +=
            `<tr>
    <td>${user.id}</td>
    <td>${user.username}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td>${roles}</td>
    <td>
        <button class="btn btn-primary" data-bs-toogle="modal"
        data-bs-target="#editModal"
        onclick="editModalData(${user.id})">Edit</button>
    </td>
     <td>
        <button class="btn btn-danger" data-bs-toogle="modal"
        data-bs-target="#deleteModal"
        onclick="deleteModalData(${user.id})">Delete</button>
    </td>
</tr>`
    }
    tableBody.innerHTML = dataHtml;
}