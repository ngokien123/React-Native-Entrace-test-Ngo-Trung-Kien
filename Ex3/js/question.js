let $template = document.getElementById('question-template')

class question extends HTMLElement{
    current = 0;
    item = [];
    score = 0;
    checkEle = false;
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild($template.content.cloneNode(true))
        
        this.$question = this.shadowRoot.getElementById('question')
        this.$form = this.shadowRoot.getElementById('answer-form') 
        this.$choices = this.shadowRoot.getElementById('choices') 
        
        this.$button = this.shadowRoot.getElementById('submit')
        this.$button.addEventListener('click', function(event){
            event.stopPropagation()
        })
        // console.log(this.$button)
        this.$button.onclick = () => {
            
            if (this.$button.innerHTML != 'Submit'){
                this.current = 0
                this.checkEle = false
                this.render(this.current)
                this.$button.innerHTML = 'Submit'
            }
        
        }
        this.$form.onsubmit = (event) => {
            event.preventDefault()
            if (this.checkEle){
                // console.log('submitted')    
                let answer = this.shadowRoot.querySelectorAll('input:checked')[0]
                // console.log('answer', answer.labels[0].innerText)
                // console.log('correct', this.item[this.current]['correct-answer'])
                if (answer.labels[0].innerText == this.item[this.current]['correct_answer']){
                    this.score += 10
                    alert(`Correct! Total score: ${this.score}`)
                } else {
                    alert(`Wrong! Total score: ${this.score}`)
                }
                this.current += 1
                this.render(this.current)
            }
            
        }
        this.$form.onclick = () => {
            // console.log('clicked')
            if (this.checkEle){
                this.checkEle.checked = false
            } 
            // console.log(this.shadowRoot.querySelectorAll('input:checked')[0])
            this.checkEle = this.shadowRoot.querySelectorAll('input:checked')[0]
            // console.log(this.checkEle)
            
        }
    }
    render(current){
        // console.log(this.item)
        if (current < this.item.length){
            let currQes = this.item[current]
            let choices = this.shuffle(currQes['incorrect_answers'].concat(currQes['correct_answer']))
            this.$question.innerHTML = currQes.question
            this.$choices.innerHTML = choices.map((item)=>{
                let result = `<label id = ${choices.indexOf(item)}><input  type="checkbox" name>${item}</label>`
                return result
            }).join('<br>')
        } else{
            this.$question.innerHTML = ''
            this.$choices.innerHTML = `Your score is: ${this.score}`
            this.$button.innerHTML = 'Again'
        }
        

    }
    set source(res){
        this.item = res
    }

    shuffle(myAns){
        // console.log(myAns)
        let result = {}
        myAns.map(function(item){
            let rand = Math.random()
            result[rand] = item
        })
        let sortedKey = Object.keys(result).sort()
        myAns = sortedKey.map((key) => {return result[key]})
        return myAns   
    }


}

window.customElements.define('test-question', question)