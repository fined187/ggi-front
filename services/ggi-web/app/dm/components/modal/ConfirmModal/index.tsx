import Image from "next/image";
import * as B from "../../styles/Boxes";
import ModalButton from "../../styled/ModalButton";
import { theme } from "../../styles/theme";
import * as T from "../../styles/Typography";
import { IConfirmModalProps } from "@/models/dm/Modal";
import * as C from "constants/dm/dm";
import * as S from "./style";

export default function ConfirmModal ({
  type,
  clickLeftBtn,
  clickRightBtn
}: IConfirmModalProps) {

  return (
    <S.ModalContainer>
      <S.TitleBox>
        {type === 'SAVE' ? (
          <Image 
            src='/dm/images/confirm_save.png'
            alt='save'
            width={48} 
            height={48} 
            style={{ margin: '10px 0'}}
          />
        ) : (
          <Image 
            src='/dm/images/confirm.png'
            alt='confirm'
            width={48} 
            height={48} 
            style={{ margin: '10px 0'}}
          />
        )}
        <T.TitleText>
          {C.CONFIRMCONTENTS[type].TITLE}
        </T.TitleText>
        <T.TextGothic18px color={theme.palette.grayMain}>
          {C.CONFIRMCONTENTS[type].SUBTITLE}
        </T.TextGothic18px>
      </S.TitleBox>
      
      <B.ModalBtnGrid styles={ type === 'OVER' 
        ? theme.styles.modal.condition.confirm.overBtn
        : theme.styles.modal.condition.confirm.btnGrid}>
        <ModalButton 
          // type={type}
          leftBtnTitle={C.CONFIRMCONTENTS[type].LEFTBTN} 
          rightBtnTitle={C.CONFIRMCONTENTS[type].RIGHTBTN} 
          clickLeftBtn={() => clickLeftBtn(type)} 
          clickRightBtn={() => clickRightBtn(type)}
        />
      </B.ModalBtnGrid>
    </S.ModalContainer>
  )
}