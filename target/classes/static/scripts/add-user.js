"use strict";

const form_new = document.getElementById('addUserForm');

async function newUser() {
    form_new.addEventListener('submit', addNewUser);
}

async function addNewUser(event) {
    event.preventDefault();
    let roles = [];
    for (let i = 0; i < form_new.selected_roles.options.length; i++) {
        if (form_new.selected_roles.options[i].selected) {
            roles.push({id: form_new.selected_roles.options[i].value,
                role: form_new.selected_roles.options[i].text});
        }
    }
    let method = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: form_new.username.value,
            firstName: form_new.firstName.value,
            lastName: form_new.lastName.value,
            email: form_new.email.value,
            password: form_new.password.value,
            roles: roles
        })
    }
    await fetch(baseCrudUrl, method).then(() => {
        form_new.reset();
        getAdminPage();
        activeTabContent('home-tab');
        let activateTab = document.getElementById('home-tab');
        activateTab.classList.add('active');
        let deactivateTab = document.getElementById('profile-tab');
        deactivateTab.classList.remove('active');
    });
}