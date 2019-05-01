const API = 'http://localhost:5000/add'
const app = new Vue({
    el: "#app",
    data: {
        ime: 'Credit app',
        kredit: '',
        rok: ''
    },
    methods: {
        go: function () {
            const obj = {
                kredit: this.kredit,
                rok: this.rok
            }

            return fetch(API, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(dejta => {
                console.log(dejta)
                this.kredit = ''
                this.rok = ''
            })
                .catch(error => console.error(error))
        }
    },
})