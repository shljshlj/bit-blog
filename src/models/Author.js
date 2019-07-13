import Address from './Address'
import Company from './Company'

class Author {
    constructor({ id, name, username, email, address, phone, company }) {
        this.authorId = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = new Address(address);
        this.phone = phone;
        this.company = new Company(company);
    }
}

export default Author

