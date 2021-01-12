<template>
  <div id="formAbout">
    <b-form center>
        <b-form-group>
            <img thumbnail fluid alt="MyPic" src="../assets/MyProfile.jpg">
        </b-form-group>
        <b-form-group
            label-size="lg"
            label="Name : Teetouch Asawasupakul"
            size="lg"
        >
        </b-form-group>
        <b-form-group
            label="Age : 22"
            label-size="lg" 
            size="lg"
        >
        </b-form-group>
        <b-form-group
            label="Degree : Bechelor's degree"
            label-size="lg" 
            size="lg"
        >
        </b-form-group>
        <b-form-group
            label="Job : Front-end Developer"
            label-size="lg" 
            size="lg"
        >
        </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>