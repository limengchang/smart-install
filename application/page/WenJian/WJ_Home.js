import React from 'react'
import {ScrollView, View} from "react-native";
import Freedomen from 'react-native-freedomen' 
import columns from '../../region/columns'
export default  class  extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '个人文件',
            headerRight: <Freedomen.Region 
                event={params => {
                    if (params.prop == 'shaixuan')
                        navigation.push('SGRZ_ShaiXuan')
                    else navigation.push('SGRZ_XinJian')
                }}
                columns={[
                    {type: 'button-image-right', prop: 'shaixuan', value: require('../../assets/shaixuan.png')},
                    {type: 'button-image-right', prop: 'xinjian', value: require('../../assets/tianjia.png')},
                    {type: 'br', style: {flexDirection: 'row'}}
                ]}
            />
        }
    }
    constructor(props) {
        super(props) 
        this.state = { }
    } 
    componentDidMount() { 
    } 
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <Freedomen.Region 
                    style={{backgroundColor: 'white'}}
                    event={params => { 
                        if (params.prop == '_clear') {
                            params.row.content = ''
                            return params.row
                        }
                    }}
                    columns={[
                        {type: 'tags-tab', value: '全部', prop:'mm', options: '全部,文档,图纸,图片,BIM'},
                        {type: 'br-row', style: {paddingTB: 10}}
                    ]}
                />
                <ScrollView>
                {
                    [1,2].map(e => {
                        return <Freedomen.Region 
                            event={params => {
                                if (params.prop == 'xianqin')
                                    this.props.navigation.push('SGRZ_XianQin')
                            }}
                            columns={[
                                [
                                    {type: 'text-h4', value: '歌林小镇综合'},
                                    {type: 'image-form', value: require('../../assets/cloud.png'), style: {marginLeft: 30, marginRight: 5}},
                                    {type: 'text-h5', value: '多云转晴', style: {flex: 1}},
                                    {type: 'text', value: '19-06-22 星期六'},
                                    {type: 'br', style: {flexDirection: 'row', alignItems: 'center'}}
                                ], [
                                    {type: 'image', value: require('../../assets/image_header.png'), style: {width: 80, height: 60, marginRight: 10}},
                                    [
                                        {type: 'text', value: '何老三、 王大头', filter: value => `作业人员：${value}`},
                                        {type: 'text', value: '别墅', filter: value => `施工部位：${value}`},
                                        {type: 'text', value: '排水', filter: value => `施工内容：${value}`},
                                    ],
                                    {type: 'click', prop: 'xianqin', style: {flexDirection: 'row', alignItems: 'center', paddingTB: 8}}
                                ], [
                                    {type: 'text', value: '创建人： 王大头', style: {flex: 1}},
                                    {type: 'br-bottoms'}
                                ],
                                {type: 'br-list-item'}
                            ]}
                        />
                    })
                }
                </ScrollView>
            </View>
        );
    }
  }