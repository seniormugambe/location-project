<template>
<div>
<h1>The Location Project</h1>
<GoogleMap :api-key="apikey" style="width: 100%; height: 500px" :center="{lat:lat, lng:lng}" :zoom="15">
    <Marker :options="{ position:{lat:lat, lng:lng}  }" />
  </GoogleMap>
</div>
</template>
<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {

components:{

    GoogleMap,
    Marker
},
data(){
return{
    lat:null,
    lng:null,
    apiKey:'AIzaSyCFA6-d5d4tD7Houkg0W6iGJ7dV_QOxhxk'
}
},

    created(){
this.$getLocation()
.then((coordinates)=>{
    this.lng=coordinates .lng;
    this.lat=coordinates .lat;

})
.catch((error)=> {
    console.log (error);
});
    }
}

</script>