import { Link } from "expo-router"
import { LinkProps } from "next/link"
import { Text,TouchableOpacity,StyleSheet,} from "react-native"
import { useColor } from "@temas/temas"


interface LinkBtnProps extends LinkProps{
    title: string,
    href: any,
}

export default function LinkBtn({title, ...props}: LinkBtnProps){
    const cores = useColor();

    const styles = StyleSheet.create({
        button: {
            backgroundColor: cores.bgButton,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            marginHorizontal:15,
        },

        title: {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 16,
        }
    })

    return(
        <Link {...props} asChild>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}
