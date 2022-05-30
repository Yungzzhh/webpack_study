import { computed, ref, nextTick } from "vue"

const cart = ref({
    items: [] as CartItem[]
})

export const useCart = () => {
    const addToCart = async (product: Product) => {
        const repeatedItem = cart.value.items.find((item) => item.productId === product.id)
        if (repeatedItem) {
            updateQuantity(repeatedItem, repeatedItem.quantity + 1)
        } else {
            cart.value.items.push({
                productId: product.id,
                quantity: 1,
                name: product.name,
                price: product.price
            })
        }
    }

    const updateQuantity = async (item: CartItem, quantity: number) => {
        // console.log(quantity);
        // console.log(item);
        item.quantity = quantity
        if (quantity <= 0) {
            let isDelete = confirm('你要删除该商品吗？')
            if (isDelete) {
                removeFromCart(item)
            } else {
                // 参考评论的同学
                // item.quantity = 2
                // setTimeout(() => {
                //     item.quantity = 1
                // }, 0)

                // Promise.resolve().then(()=> {
                //     item.quantity = 1
                // })
                
                nextTick(()=> item.quantity = 1)
            }
            return;
        }
        
    }

    const removeFromCart = async (item: CartItem) => {
        cart.value.items = cart.value.items.filter((cartItem) => cartItem.productId !== item.productId)
    }
    const totalProducts = computed(() => {
        return cart.value.items.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    })

    const isCartEmty = computed(() => cart.value.items.length === 0)
    return {
        cart,
        addToCart,
        totalProducts,
        updateQuantity,
        removeFromCart,
        isCartEmty
    }
}