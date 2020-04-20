import { debounce } from './utils'
import backTop from 'components/content/backTop/backTop'
export const itemListener = {
    data() {
        return {
            itemListener: null,
            refresh: null
        }
    },
    mounted() {
        //防抖法2
        this.refresh = debounce(this.$refs.scroll.refresh, 300)
        this.itemListener = () => {
            this.refresh()
        }
        this.$bus.$on('imgLoad', this.itemListener)
    }
}

export const backTopMixin = {
    components: {
        backTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        isShowBack(position) {
            -position.y > 1000 ? this.isShowBackTop = true : this.isShowBackTop = false
        }
    }
}