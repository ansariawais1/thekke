import React,{ useState} from "react";
import {View,Button,Text,Image, TouchableOpacity} from 'react-native'

import { colors } from "./style/style";


// ₹
export const MasalaDetail=(prop)=>{
    const [quantity,setQuantity]=useState(1);

    const increasePrice=()=>{
        
        setQuantity(quantity+1)
    }
    
    const decreasePrice=()=>{
        if(quantity>1){
        setQuantity(quantity-1)
        }
        else{
            alert("Quantity cannot be less than 1")
        }
    }
    // const imageUrl=prop.route.params?require(prop.route.params.imageUrl):require("")
    
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{height:170,backgroundColor:colors.green,borderBottomLeftRadius:50,borderBottomRightRadius:50,padding:15}}>
                <Text>Masala & spices/{prop.route.params.company}</Text>
                <View style={{alignItems:"center"}}>
                    <View style={{backgroundColor:"white",width:"60%",margin:"auto",height:200,borderRadius:200,alignItems:"center",justifyContent:"center",marginTop:30,overflow:"hidden"}}>
                        <Image style={{width:250,height:250}} source={require('./images/pickle.png')} />
                    </View>
                </View>
                <View>
                    <Text style={{lineHeight:30}}>Description</Text>
                    <Text style={{lineHeight:20,fontSize:12}}>Description</Text>
                    <Text style={{lineHeight:30,marginTop:10}}>Select Variant</Text>
                    <View style={{backgroundColor:colors.green,padding:10,width:70,color:"white",borderRadius:10,elevation:18}}>
                        <Text style={{color:"white"}} >{prop.route.params.weigth}</Text>
                        <Text style={{color:"white"}} >₹{prop.route.params.price}</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{position:"absolute",bottom:0,left:0,right:0,padding:15,flexDirection:"row"}}>
                        <View style={{borderWidth:1,borderColor:colors.green,borderRadius:20,width:"35%",height:40,justifyContent:"center",overflow:"hidden",flexDirection:"row"}}>
                            <TouchableOpacity style={{backgroundColor:colors.greenGray,width:30,height:40,left:0,position:"absolute"}} onPress={()=>decreasePrice()}>
                                <View style={{left:0,justifyContent:"center"}}><Text style={{lineHeight:34,textAlign:"center",color:colors.green}}>-</Text></View>
                            </TouchableOpacity>
                            <Text style={{textAlign:"center",lineHeight:35,color:colors.green}}>{quantity}</Text>
                            <TouchableOpacity style={{backgroundColor:colors.greenGray,width:30,height:40,right:0,position:"absolute"}} onPress={()=>increasePrice()}>
                                <View><Text style={{lineHeight:34,textAlign:"center",color:colors.green}}>+</Text></View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"65%"}}>
                            <View style={{marginLeft:20,borderColor:colors.green,borderRadius:20,borderWidth:1,height:40,backgroundColor:colors.green,justifyContent:"center"}}>
                                <Text style={{color:"white",textAlign:"center"}}>Add ₹ {(quantity*prop.route.params.price).toFixed(2)}  </Text>
                            </View>
                        </View>
                    </View>
        </View>
    )
}