import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class EmployeeList extends Vue {
  mounted(){
    console.log('123');
  }
    get list() {
        return ['1', '2', '3'];
    }
}
