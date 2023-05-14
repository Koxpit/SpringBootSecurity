"use strict";

const form_delete = document.getElementById('delete_form');
const id_delete = document.getElementById('id_delete');
const username_delete = document.getElementById('username_delete');
const firstName_delete = document.getElementById(`firstName_delete`);
const lastName_delete = document.getElementById('lastName_delete');
const email_delete = document.getElementById('email_delete');
const password_delete = document.getElementById('password_delete');


async function deleteModalData(id) {
    $('#deleteModal').modal('show');
    let usersPageDel = await fetch(baseCrudUrl + id);
    if (usersPageDel.ok) {
        await usersPageDel.json().then(user => {
            id_delete.value = `${user.id}`;
            username_delete.value = `${user.username}`;
            firstName_delete.value = `${user.firstName}`;
            lastName_delete.value = `${user.lastName}`;
            email_delete.value = `${user.email}`;
            password_delete.value = `${user.password}`;
        })
    } else {
        alert(`Error, ${usersPageDel.status}`)
    }
}

async function deleteUser() {
    let urlDel = baseCrudUrl + id_delete.value;
    let method = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: form_delete.username.value,
            firstName: form_delete.firstName.value,
            lastName: form_delete.lastName.value,
            email: form_delete.email.value,
            password: form_delete.password.value
        })
    }
    await fetch(urlDel, method).then(() => {
        $('#deleteCloseBtn').click();
        getAdminPage();
    })
}