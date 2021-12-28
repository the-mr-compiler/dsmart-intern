var count = 0;

const addContact = (newContact) => {
  const contactList = document.querySelector("#contact-list");
  const contact = document.createElement("a");
  contact.setAttribute(
    "class",
    "ms-1 list-group-item list-group-item-action d-flex px-1 row gx-5"
  );

  contact.setAttribute("id", "cont" + newContact.id);
  contact.innerHTML = `
        <div class="img rounded-circle col-2"></div>
        <div class="col-8">
            <p class="mb-1">${newContact.name}</p>
            <small>${newContact.phone}</small>
        </div>
        <a href="tel:${newContact.phone}" class="btn btn-outline-primary col-1 mt-2 text-center p-0 py-2" ><i class="fas fa-phone-alt"></i></a>
    `;
  if (
    newContact.email !== null &&
    newContact.email !== undefined &&
    newContact.email !== ""
  )
    contact.innerHTML += `<a href="mailto:${newContact.email}" class="btn btn-outline-primary col-1 mt-2 text-center p-0 py-2" ><i class="far fa-envelope"></i></a>
    `;
  contactList.appendChild(contact);
};

const handleAddNewContact = (e) => {
  e.preventDefault();
  var form = new FormData(document.getElementById("addContactForm"));
  const newContact = {
    id: ++count,
    name: form.get("contactName"),
    email: form.get("contactEmail"),
    phone: form.get("contactPhone"),
  };
  document.getElementById("addContactForm").reset();
  document.getElementById("closeAddContactForm").click();
  addContact(newContact);
};
