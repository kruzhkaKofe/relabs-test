<template>
  <el-card class="card" :body-style="{ padding: '1rem' }" shadow="hover">
    <div class="cover">
      <el-image
        class="cover__image"
        :src="item.image"
        :alt="item.description"
      />
      <div class="cover__view">
        <el-button class="cover__view-button">Быстрый просмотр</el-button>
      </div>
    </div>
    <div class="info">
      <div class="price">
        <p class="price__sale">{{ item.sale }} Р</p>
        <p class="price__fullprice">{{ item.fullprice }} Р</p>
      </div>
      <div class="info__description">
        {{ item.description }}
      </div>
      <el-rate
        class="info__rate"
        v-model="value"
        disabled
        show-score
        text-color="#999999"
        score-template="87"
      />
      <div class="info__credit">Рассрочка 0-0-6</div>
      <div class="actions">
        <el-button class="actions__add-cart-button">В корзину</el-button>
        <icon-like class="actions__like-button" />
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { IconLike } from "../icons/index.js";

const value = ref(5);

const props = defineProps({
  item: Object,
});
</script>

<style lang="sass" scoped>
.card
  height: 48rem
  width: 25rem
  border-radius: $default
  font-size: 1.4rem

.cover
  position: relative
  height: 25rem

  &:hover .cover__view
    display: flex
    align-items: center
    justify-content: center

  &__image
    height: 25rem

  &__view
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    cursor: pointer
    display: none

    &-button
      opacity: 0.8
      border-radius: $default

.info
  display: flex
  flex-direction: column

  &__description
    color: $gray
    text-align: left
    margin-bottom: 0.5rem

  &__rate
    display: flex
    margin-bottom: 0.5rem

  &__credit
    align-self: flex-start
    border-radius: 2rem
    padding: 0.6rem 1.2rem
    background-color: pink
    white-space: nowrap
    background: $lightblue-yellow
    font-weight: 600
    color: $dark
    margin-bottom: 1rem

.price
  display: flex
  align-items: center
  font-size: 1.8rem
  font-weight: 600
  margin-bottom: 0.5rem

  &__fullprice
    margin-left: 1rem
    text-decoration: line-through
    color: $gray

.actions
  display: flex
  align-items: center

  &__add-cart-button
    border: 2px solid $purple
    background-color: $purple
    color: $white

    &:hover
      border: 2px solid $light-purple
      background-color: $light-purple

  &__like-button
    margin-left: 2rem
    width: 3rem
    height: 3rem
    cursor: pointer


:deep(.card__like-button) path
  transition: fill .4s ease

:deep(.card__like-button:hover) path
  fill: $purple

:deep(.el-rate)
  --el-rate-fill-color: #CB11AB
  --el-rate-text-color: lightgray
  --el-fill-color: lightgray
</style>
