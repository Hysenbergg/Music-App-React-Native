import React from "react";
import { View, Image, Text} from 'react-native';
import styles from './MusicCard.style';

const MusicCard = props => {
    return(
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.inner_container} >
                <Text style={styles.title} > {props.song.title} </Text>
                <View style={styles.content_container} >
                    <View style={styles.info_container} > 
                        <Text style={styles.artist} > {props.song.artist} </Text>
                        <Text style={styles.music_year} > {props.song.year} </Text>
                        {props.song.isSoldOut && (
                            <View style={styles.soldOut_container} >
                                <Text style={styles.soldOut_info} > Tükendi </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MusicCard;