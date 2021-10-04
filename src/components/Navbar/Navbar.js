export default {
    name: 'Sidenav',
    data() {
        return {
            breadCrumbList: [],
            breadCrumbTotal: 0
        }
    },
    mounted() {this.updatedList() },
    watch: {'$route'() { this.updatedList() } },
    methods: {
        updatedList() {
            this.breadCrumbList = this.$route.meta.breadCrumb
            this.breadCrumbTotal = this.breadCrumbList.length
        }
    }
}