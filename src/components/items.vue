<template>
    <ul class="items">
        <li v-for="item in searchItems" class="item" :class="isPlay" @click="play(item)">
            <img :src="item.album.picUrl+'?param=60y60'">
            <div class="artist">
                <p class="song">{{ item.name}}</p>
                <p class="singer">{{ item.artists[0].name }}</p>
            </div>
            <div class="ibtn">
                <i class="iconfont icon-plus icon-size" @click.stop="addSong(item)"></i>
            </div>
        </li>
    </ul>
</template>
<style rel="stylesheet/less" lang="less">
    .item{
        position: relative;
        border-bottom:1px #e8e4e4 solid;
        width: 100%;
        padding:.1rem;
        overflow:hidden;
        img{
            height: .56rem;
            width: .56rem;
            border:.02rem #f7fafc solid;
            border-radius:50%;
            float:left;
        }
        .artist{
            position:absolute;
            left:.66rem;
            right:.4rem;
            padding:.08rem;
            overflow:hidden;
            .song{
                line-height:0.26rem;
                font-size:.2rem;
                color:#646464;
            }
            .singer{
                line-height:0.18rem;
                color:#929292;
            }
            p{
                white-space:nowrap;
            }
        }
        .ibtn{
            float:right;
            .icon-size{
                line-height:.6rem;
                font-size:.22rem;
                color: #ececec;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import {getSearchData} from '../vuex/getters'
    import {setSongInfo,addSong} from '../vuex/actions'
    export default{
        data(){
            return {
                isPlay : {
                    'play': false
                }
            }
        },
        methods : {
            play(item){
                this.setSongInfo(item)
                this.addSong(item,true)
            }
        },
        vuex : {
            getters : {
                getSearchData
            },
            actions: {
                setSongInfo,addSong
            }
        },
        computed : {
            searchItems(){
                return this.getSearchData.result.songs
            }
        }
    }
</script>
