<template>
    <div class="el-card edit-content">

        <div class="el-card__body">
            <form class="el-form el-form--label-right">
                <div class="el-form-item is-required"><label for="name" class="el-form-item__label" style="width: 90px;">分类名称</label>
                    <div class="el-form-item__content" style="margin-left: 90px;">
                        <div class="el-input">
                            <input autocomplete="off" type="text" rows="2" validateevent="true" class="el-input__inner" v-model="selectData.name"></div>
                        <!--{{selectData.name}}-->
                    </div>
                </div>
                <div class="el-form-item is-required"><label for="name" class="el-form-item__label" style="width: 90px;">模型标识</label>
                    <div class="el-form-item__content" style="margin-left: 90px;">
                        <div class="el-input">
                            <input autocomplete="off" type="text" rows="2" validateevent="true" class="el-input__inner" v-model="selectData.model"></div>
                        <!--{{selectData.model}}-->
                    </div>
                </div>
                <div class="el-form-item is-required"><label for="name" class="el-form-item__label" style="width: 90px;">跳转路径</label>
                    <div class="el-form-item__content" style="margin-left: 90px;">
                        <div class="el-input">
                            <input autocomplete="off" type="text" rows="2" validateevent="true" class="el-input__inner" v-model="selectData.path"></div>
                        <!--{{selectData.path}}-->
                    </div>
                </div>
                <div class="el-form-item"><label for="image" class="el-form-item__label" style="width: 90px;">分类logo</label>
                    <div class="el-form-item__content" style="margin-left: 90px;">
                        <div class="component-upload-uploadimg">
                            <div>
                                <ul class="el-upload-list el-upload-list--picture-card"></ul>
                                <div class="el-upload el-upload--picture-card" style="display: block;"><i class="el-icon-plus"></i><input type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif"
                                        class="el-upload__input"></div>
                            </div>
                            <div class="el-dialog__wrapper" style="display: none;">
                                <div class="el-dialog el-dialog--tiny" style="top: 15%;">
                                    <div class="el-dialog__header"><span class="el-dialog__title"></span>
                                        <div class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="el-form-item"><label for="sort" class="el-form-item__label" style="width: 90px;">分类排序</label>
                    <div class="el-form-item__content" style="margin-left: 90px;">
                        <div class="el-input">
                            <input autocomplete="off" placeholder="最小的排在前面" type="text" rows="2" validateevent="true" class="el-input__inner">
                        </div>
                    </div>
                </div>

                <div class="el-form-item">

                    <div class="el-form-item__content" style="margin-left: 90px;"><button type="button" class="el-button el-button--info" @click="save"><span>保存</span></button>

                    </div>
                </div>
            </form>
        </div>
        <!--<el-card class="edit-content">
            <el-form label-position="right" label-width="90px" :rules="rules" :model="selectData" ref="form">
                <el-form-item label="分类名称" prop="name">
                    <el-input v-model="selectData.name" :disabled="selectData.pid == null"></el-input>
                </el-form-item>
                <el-form-item label="栏目logo" prop="image">
                    <UploadImg ref="uploadImg" :defaultImg="selectData.image" :url="uploadImgUrl" :disabled="selectData.pid == null" :onSuccess="handleImgUploaded"></UploadImg>
                </el-form-item>
                <el-form-item label="课程类型" prop="category_type">
                    <el-radio-group v-model="selectData.category_type">
                        <el-radio :label="1">课程栏目</el-radio>
                        <el-radio :label="2">应试课程栏目</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否最终菜单" prop="ended">
                    <el-radio-group v-model="selectData.ended">
                        <el-radio :label="0">否</el-radio>
                        <el-radio :label="1">是</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="栏目排序" prop="sort">
                    <el-input placeholder="最小的排在前面" :disabled="selectData.pid == null" v-model.number="selectData.sort"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" @click="submitForm" :disabled="selectData.pid == null">保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>-->

    </div>
</template>
<script>
    export default {
        data() {
            return {
                SecMenu: [],
                selectData: {
                    name: '',
                    model: '',
                    path: ''
                },
            }
        },
        props: ['data', 'type'],
        created() {},
        watch: {
            'type' () {
                this.initData()
            },
            'data' () {
                //判断是否存在传过来的数据 有则使用无则初始化
                if (this.data) {
                    this.selectData = Object.assign({}, this.data)
                }
            }
            // '$store.state.index.secMenu'(){
            //     this.selectData = Object.assign({},this.$store.state.index.secMenu)
            // }
        },
        methods: {
            initData() {
                this.selectData = {
                    name: '',
                    model: '',
                    path: ''
                }
            },
            save() {
                xmview.showDialog(this.selectData, () => {
                    this.$emit('handleSave', this.selectData)
                })
            }

        }
    }
</script>