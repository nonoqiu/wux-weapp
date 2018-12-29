import baseComponent from '../helpers/baseComponent'

baseComponent({
    relations: {
        '../timeline/index': {
            type: 'parent',
        },
    },
    properties: {
        prefixCls: {
            type: String,
            value: 'wux-timeline-item',
        },
        content: {
            type: String,
            value: '',
        },
        dotStyle: {
            type: String,
            value: '',
        },
        custom: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        isLast: false,
        isPending: false,
        pending: false,
        className: '',
    },
    computed: {
        classes() {
            const { prefixCls, isLast, pending, isPending, custom } = this.data
            const wrap = this.classNames(prefixCls, {
                [`${prefixCls}--last`]: isLast,
                [`${prefixCls}--pending`]: pending,
            })
            const tail = this.classNames(`${prefixCls}__tail`, {
                [`${prefixCls}__tail--pending`]: isPending,
            })
            const dot = this.classNames(`${prefixCls}__dot`, {
                [`${prefixCls}__dot--custom`]: custom,
            })
            const content = `${prefixCls}__content`

            return {
                wrap,
                tail,
                dot,
                content,
            }
        },
    },
    methods: {
    	updateIsLastElement({ index, isLast, isPending, pending, position }) {
            const { prefixCls } = this.data
            const className = position === 'alternate' ? index % 2 === 0 ? `${prefixCls}--alternate ${prefixCls}--left` : `${prefixCls}--alternate ${prefixCls}--right` : position === 'right' ? `${prefixCls}--right` : ''
            this.setData({ isLast, isPending, pending, className })
        },
    },
})