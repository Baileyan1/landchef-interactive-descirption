import draggable from 'vuedraggable'

export default{
    name: 'landchef',
    components: {
        draggable
    },
    data(){
        return{
            myArray: [
                {name: "angualar", id:0},
                {name: "react", id:1},
                {name: "vue", id:2},
                {name: "HTML", id:3},
                {name: "CSS", id:4},
                {name: "Sass", id:5},
            ],
            oldIndex:'',
            newIndex:''
        }
    },
    methods:{
        onEnd: function(evt){
            console.log(evt)
            this.oldIndex = evt.oldIndex;
            this.newIndex = evt.newIndex;
        }
    }
}