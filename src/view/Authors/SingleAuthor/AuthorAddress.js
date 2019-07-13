import React from 'react'

const AuthorAddress = ({ street, city, zipcode, lat, lng }) => {
    return (
        <article className="author-address flex-row">
            <div className="address-info">
                <h2>Address</h2>
                <div>{street}</div>
                <div>{city}</div>
                <div>{zipcode}</div>
            </div>
            <div className="author-address-iframe">
                <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title={street}
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                />
            </div>
        </article>
    )
}

export { AuthorAddress }