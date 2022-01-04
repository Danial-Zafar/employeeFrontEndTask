import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class EmployeeDataTable extends Vue {
    @Prop({default:[]}) employeeData!: any [];

    serialNumber = 0;
    search = '';
  
    get users() {
        return this.employeeData;
    }

    get headers()  {
        return [
            { text: 'First', value: 'firstName' },
            { text: 'Last', value: 'lastName' },
            { text: 'Role', value: 'role' },
            { text: "", value: "controls", sortable: false }
        ]
    }

    onClickDelete( item : any ) {
        if(item.firstName){
            this.$emit('deleteEmployee', item)
            this.employeeData.splice(this.employeeData.findIndex(({firstName}) => firstName == item.firstName), 1);    
        }
      }
}