"use strict";

const form_edit = document.getElementById('edit_form');
const id_edit = document.getElementById('id_edit');
const username_edit = document.getElementById('username_edit');
const firstName_edit = document.getElementById('firstName_edit');
const lastName_edit = document.getElementById('lastName_edit');
const email_edit = document.getElementById('email_edit');
const password_edit = document.getElementById('password_edit');


async function editModalData(id) {
    $('#editModal').modal('show');
    const urlDataEd = baseCrudUrl + id;
    let usersPageEd = await fetch(urlDataEd);
    if (usersPageEd.ok) {
        await usersPageEd.json().then(user => {
            id_edit.value = `${user.id}`;
            username_edit.value = `${user.username}`;
            firstName_edit.value = `${user.firstName}`;
            lastName_edit.value = `${user.lastName}`;
            email_edit.value = `${user.email}`;
            password_edit.value = `${user.password}`;
        })
    } else {
        alert(`Error, ${usersPageEd.status}`)
    }
}

async function editUser() {
    let urlEdit = baseCrudUrl + id_edit.value;
    let listOfRole = [];
    for (let i = 0; i < form_edit.edit_roles.options.length; i++) {
        if (form_edit.edit_roles.options[i].selected) {
            listOfRole.push({id: form_edit.edit_roles.options[i].value,
                role: form_edit.edit_roles.options[i].text});
        }
    }
    let method = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: form_edit.username.value,
            firstName: form_edit.firstName.value,
            lastName: form_edit.lastName.value,
            email: form_edit.email.value,
            password: form_edit.password.value,
            roles: listOfRole
        })
    }
    await fetch(urlEdit, method).then(() => {
        $('#editCloseBtn').click();
        getAdminPage();
    })
}

