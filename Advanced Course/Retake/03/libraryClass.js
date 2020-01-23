class Library {

    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = { normal: libraryName.length, special: libraryName.length * 2, vip: Number.MAX_SAFE_INTEGER };
    }

    subscribe(name, type) {

        if (this.subscriptionTypes.hasOwnProperty(type) === false) {
            throw new Error(`The type ${type} is invalid`);
        }

        let isUserSubscribed = false;
        let index = -1;

        if (this.subscribers.length !== 0) {
            for (let i = 0; i < this.subscribers.length; i++) {
                if (this.subscribers[i].name === name) {
                    isUserSubscribed = true;
                    index = i;
                    break;
                }
            }
        }

        if (isUserSubscribed) {
            this.subscribers[index].type = type;

            return this.subscribers[index];
        } else {
            let subscriber = {
                name: name,
                type: type,
                books: []
            };

            this.subscribers.push(subscriber);

            return subscriber;
        }
    }

    unsubscribe(name) {
        if (this.subscribers.length === 0) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        let doesUserExist = false;
        let index = -1;

        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].name === name) {
                doesUserExist = true;
                index = i;
                break;
            }
        }

        if (doesUserExist === false) {
            throw new Error(`There is no such subscriber as ${name}`);
        } else {
            this.subscribers.splice(index, 1);
        }

        return this.subscribers;
    }


    receiveBook(subscriberName, bookTitle, bookAuthor) {
        if (this.subscribers.length === 0) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let doesUserExist = false;
        let index = -1;

        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].name === subscriberName) {
                doesUserExist = true;
                index = i;
                break;
            }
        }

        if (doesUserExist === true) {
            if (this.subscribers[index].type === 'normal') {
                if (this.subscriptionTypes.normal > this.subscribers[index].books.length) {
                    let book = {
                        title: bookTitle,
                        author: bookAuthor
                    };
                    this.subscribers[index].books.push(book);
                }else{
                    throw new Error(`You have reached your subscription limit ${this.subscriptionTypes.normal}!`);
                }
            }else if(this.subscribers[index].type === 'special'){
                if (this.subscriptionTypes.special > this.subscribers[index].books.length) {
                    let book = {
                        bookTitle,
                        bookAuthor
                    };
                    this.subscribers[index].books.push(book);
                }else{
                    throw new Error(`You have reached your subscription limit ${this.subscriptionTypes.special}!`);
                }
            }else if(this.subscribers[index].type === 'vip'){
                let book = {
                    bookTitle,
                    bookAuthor
                };
                this.subscribers[index].books.push(book);
            }
        }else{
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }


        return this.subscribers[index];
    }

    showInfo(){
        if(this.subscribers.length === 0){
            throw new Error(`${this.libraryName} has no information about any subscribers`);
        }

        let resultString = '';

        for (let i = 0; i < this.subscribers.length; i++) {
            resultString += `Subscriber: ${this.subscribers[i].name}, Type: ${this.subscribers[i].type}\nReceived books:`;

            for (let j = 0; j < this.subscribers[i].books.length; j++) {
                if (j++ < this.subscribers[i].books.length) {
                    //with comma
                    resultString += ` ${this.subscribers[i].books[j].title} by ${this.subscribers[i].books[j].author},`;
                }else{
                    //without comma
                    resultString += ` ${this.subscribers[i].books[j].title} by ${this.subscribers[i].books[j].author}`;
                }
            }
        }

        return resultString;
    }
}
