/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from "react-native";
import { styles } from "../Css/globe";

// RN Code
type ColPropsT = {
  numRows: number;
  children: any;
};
const Col = ({ numRows, children }: ColPropsT) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }: any) => <View style={styles.flex}>{children}</View>;

type GridPropT = {
  title: string;
  description: string;
};

export default function Grid({ title, description }: GridPropT) {
  return (
    <>
      <View style={[styles.container, styles.mt10, styles.borderDefault]}>
        <Row>
          <Col numRows={2}>
            <Text style={[styles.extremeBold, styles.textBlack]}>{title}</Text>
          </Col>
          <Col numRows={2}>
            <Text style={[styles.extremeBold, styles.textBlack]}>
              {description}
            </Text>
          </Col>
        </Row>
      </View>
    </>
  );
}
