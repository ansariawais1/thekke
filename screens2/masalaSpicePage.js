
import { View,TextInput,ScrollView,Pressable,TouchableOpacity,Text,Image,Modal} from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import React,{useEffect,useState} from 'react'
import { CardStyleInterpolators,useHeaderHeight } from '@react-navigation/stack';
import { colors } from './style/style';
import { newPickleData } from './data/data';
import CSS,{ vw,vh } from './style/style';
// import { SearchBar } from 'react-native-elements';
// import {Form,Control} from 'react-redux-form'
export const MasalaAndSpice=({navigation,route})=>{
    const headerHeight=useHeaderHeight()
    console.log(route)
    const [searchValue,setSearchValue]=useState('')
    const [searchResult,setSearchResult]=useState([])
    const [result,updateResult]=useState([])
    const [typing,updateTypingStatus]=useState(false)
    
    const updateSearchRecord=(search)=>{
        updateTypingStatus(true)
        console.log(search)
        setSearchValue(search)
        const res=newPickleData.filter((obj)=>            
            obj.name.toLowerCase().includes(search.toLowerCase())
        )

        setTimeout(()=>{
            updateResult(res)
            console.log("{",result)
        },200)
        setSearchResult([])
        
        console.log(res)
    }
        return(
            <View style={{flex:1}}>
            <View style={CSS.topEmptyBar}></View>
            <View style={{backgroundColor:colors.green,height:45}}>
                <TextInput value={searchValue} onChangeText={updateSearchRecord} onEndEditing={()=>{updateTypingStatus(false)}} importantForAutofill="auto" style={CSS.searchBox} placeholder=" Search Brand" placeholderTextColor="#ffffff"></TextInput>
                    {(result.length>0 && typing)?
                        <View style={{backgroundColor:"#f0f0f0",marginHorizontal:13,borderRadius:10,zIndex:1,paddingHorizontal:10,paddingVertical:5}}>
                            <ScrollView >
                            {result.map((val,index)=>
                            <View>
                                <TouchableOpacity onPress={()=>{updateTypingStatus(false)
                                setSearchValue(val.name)
                                }}>
                                    <Text style={{paddingVertical:10}} key={index}>{val.name}</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                            </ScrollView>
                        </View>
                        :<></>
                    }
            </View>
            <ScrollView style={{flex:1,zIndex:-1}}>
                <View style={{paddingHorizontal:15,zIndex:-1}}>
                    {newPickleData.map((value,index)=>{
    
                        if((value.type==="Masala" && searchValue===value.name) && route.name==="Masala and Spice"){
                            return(
                                <MasalaAndSpiceCard  listData={value} key={index} navigation={navigation}/>
                            )
                        }
                        if((value.type==="Edible Oil"|| searchValue===value.name) && route.name==="Masala and Spice"){
                            return(
                                <MasalaAndSpiceCard  listData={value} key={index} navigation={navigation}/>
                            )
                        }
                        if((value.type==="Pickles" || searchValue===value.name) && route.name==="Pickles"){
                            return(
                                <MasalaAndSpiceCard  listData={value} key={index} navigation={navigation}/>
                            )
                        }
                        
                        
                    }
                    )
                    }   
                </View>
            </ScrollView>
            
            </View>
        )
    }
    
    const MasalaAndSpiceCard=(listData)=>{
        const setting={
            width:vw(85),
            height:120,
            color:"#000",
            border:5,
            radius:5,
            opacity:0.1,
            x:0,
            y:0,
            style:{marginVertical:10}
        }    
        const [modalVisible,openCloseModal]=useState(false)
        const [propData,setProp]=useState([])
    const toggleModal=(prop)=>{
        openCloseModal(!modalVisible)
        setProp(prop)
    }
        return(
            <View >
                
                {listData.listData!==undefined?
                <View>
                    <View style={CSS.masalaScrollScreen}>
                                <TouchableOpacity onPress={()=>{listData.navigation.navigate("Masala Details",listData.listData)}}>
                                    <View style={{padding:5,backgroundColor:colors.green,borderRadius:10}}>
                                        <Text style={{color:"white",textAlign:"center"}}>ADD</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                <TouchableOpacity onPress={()=>{toggleModal(listData.listData)}}>
                    <BoxShadow setting={setting}>
                        <View style={{backgroundColor:"white",width:vw(85),borderRadius:5}} >
                            <View style={{paddingHorizontal:10,paddingVertical:10,flexDirection:"row"}}>
                                <View style={{width:"30%",justifyContent:"center",alignItems:"center",}}>
                                    <Image style={{width:60,height:100}} source={require('./images/pickle.png')}  />
                                    
                                </View>
                                <View style={{width:"70%",paddingRight:10}}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize:16,color:"gray",lineHeight:35}}>{listData.listData.name}</Text>
                                    <Text style={{color:"gray",fontSize:16,lineHeight:18}} >{listData.listData.weigth}</Text>
                                    <Text style={{fontSize:16,color:colors.green,marginTop:20}}>₹{listData.listData.price-2}    <Text style={{textDecorationLine:"line-through",left:10,color:"#f00"}}>₹{listData.listData.price}</Text> </Text>
                                </View>
                            </View>
                            
                        </View>
                    </BoxShadow>
                </TouchableOpacity>
                </View>
                
                    :
                    <></>
    }
    
    
    <Modal
                transparent={modalVisible}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                openCloseModal(!modalVisible);
            }}
          >
              <DescriptionModal detail={listData.listData} />
          </Modal>
            </View>
        )
    }
    
    const DescriptionModal=(prop)=>{
    
        return(
            <View style={{flex:1}} >
                <View style={{flex:0.65,backgroundColor:"rgba(0, 0, 0,0.6)"}}></View>
                <View style={{flex:0.35,backgroundColor:"white"}}>
                    <View style={CSS.modalTitle}>
                        <Text >Select Variant  </Text>
                        <Text style={{position:"absolute",right:20,textAlign:"right"}}>X</Text>
                    </View>
                    <View style={{paddingHorizontal:20,paddingTop:40}}>
                        <Text style={{fontSize:16,fontWeight:"600"}}>Quantity/size  </Text>
                        <Text style={{fontSize:13}}>choose one option from the following</Text>
                        <View style={{flexDirection:"row",marginTop:30}}>
                            <View style={{flex:0.7}}>
                                <Text>{prop.detail.weigth}</Text>
                                <Text>₹ {prop.detail.price-2} </Text>
                            </View>
                            <View style={{flex:0.3}}>
                                <Pressable style={{backgroundColor:colors.green,borderRadius:10,height:25,justifyContent:"center"}}>
                                    <Text style={{color:"white",textAlign:"center"}} >ADD</Text>
                                </Pressable>
                                <Text style={{paddingHorizontal:5}}>MRP {prop.detail.price-2}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:30,height:40,backgroundColor:colors.green,justifyContent:"center",borderRadius:60}}>
                            <Pressable>
                                <Text style={{color:"white",textAlign:"center"}}>Add to cart  ₹ {prop.detail.price-2}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        )
    }