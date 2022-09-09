<template>
  <el-row>
    <el-col
      class="col"
      :xl="4"
      :lg="6"
      :md="8"
      :xs="12"
      v-for="item in items"
      :key="item"
    >
      <item-card :item="item" />
    </el-col>
  </el-row>
</template>

<script setup>
import ItemCard from "@/components/shoppage/ItemCard.vue";

const items = [
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
  {
    image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png",
    sale: "86 956",
    fullprice: "99 990",
    description:
      'Apple / Смартфон iPhone 12 pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ',
  },
];
</script>

<style lang="sass" scoped>
.col
  display: flex
  justify-content: center
  margin-bottom: 2rem
</style>
