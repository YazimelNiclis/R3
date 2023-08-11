import { useParams } from "react-router-dom";

export default function Contact() {
  let { contactId } = useParams();

  let contact;
  if (contactId == 1) {
    contact = {
      first: "Yazimel",
      last: "Niclis",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "your_handle",
      notes: "Some notes",
      favorite: true,
    };
  } else {
    contact = {
      first: "Pepe",
      last: "Argento",
      avatar: "https://placekitten.com/g/200/201",
      twitter: "your_handle",
      notes: "Some notes",
      favorite: true,
    };
  }

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}
      </div>
    </div>
  );
}
