import { useState, useCallback, useRef, useEffect } from 'react'
import { Box, Text, } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';

import FsImgDrop from './FullScreenImgDrop';
import DraggablePic from './DraggablePic';
import ImgCxtMenu from './ImgCxtMenu';

const DragDropPic = () => {
  const file_buf = useRef<FileWithPath[]>([]);
  const openRef = useRef<() => void>(null);
  const mouse_x = useRef<number>(0);

  const [img_arr, setImgArr] = useState<{ img: (string | ArrayBuffer | null), width: number, height: number }[]>([]);
  const [cxt_men_open, setCxtMenOpen] = useState<boolean>(false);
  const [cxt_coord, setCxtCoord] = useState<{ top: number, left: number }>({ top: 0, left: 0, });
  const [cxt_img_ind, setCxtImgInd] = useState<number | undefined>(undefined);
  const [mouse_enter, setMouseEnter] = useState<boolean>(false);

  const fr = new FileReader();
  const img = new Image();

  fr.addEventListener(
    'load',
    () => {
      const r: string | ArrayBuffer | null = fr.result;
      img.src = r as string;
    },
    false,
  );

  img.addEventListener(
    'load',
    () => {
      setImgArr((prev) => [...prev, { img: img.src, width: img.width, height: img.height }]);
    },
    false,
  );

  fr.addEventListener(
    'loadend',
    () => {
      if (file_buf.current.length > 0) {
        let temp: FileWithPath[] = [...file_buf.current];
        let img_file: FileWithPath | undefined = temp.shift();
        file_buf.current = [...temp];

        fr.readAsDataURL(img_file as FileWithPath);
      };
    },
    false,
  );

  useEffect(() => {
    const hClick = () => { setCxtMenOpen(false); };
    document.addEventListener('click', hClick);

    return () => {
      document.removeEventListener('click', hClick);
    };
  }, []);

  const hAddImgs = useCallback((img_files: FileWithPath[]) => {
    let temp: FileWithPath[] = [...img_files];
    let img_file: FileWithPath | undefined = temp.shift();
    file_buf.current = [...temp];

    fr.readAsDataURL(img_file as FileWithPath);
  }, []);

  const clickOrDrag = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.button === 0) {
      const mouse_up_x: number = e.clientX;

      if (mouse_up_x < mouse_x.current + 1 && mouse_up_x > mouse_x.current - 1)
        openRef.current?.();
    };
  }, []);

  const cxtMenu = useCallback((top: number, left: number, img_ind: number) => {
    setCxtImgInd(img_ind);
    setCxtCoord({ top: top, left: left });
    setCxtMenOpen(true);
  }, []);

  const cxtSel = useCallback((sel: number) => {
    if (cxt_img_ind !== undefined) {
      switch(sel) {
        case 1:
          setImgArr((prev) => [...prev.filter((_, ind) => ind !== cxt_img_ind)]);
          break;

        default:
          break;
      };
    };
  }, [cxt_img_ind]);

  return (
    <Box
      onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { mouse_x.current = e.clientX; }}
      onMouseUp={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { if (!cxt_men_open) clickOrDrag(e); }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      style={{
        margin: 0,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: '#e2e2e2',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <FsImgDrop hAddImgs={hAddImgs} openRef={openRef} />

      {mouse_enter && img_arr.length <= 0 &&
        <Text size='32px' fw={700} pos='absolute' top='50%'>Drag and drop or click area to upload images</Text>
      }

      {cxt_men_open &&
        <ImgCxtMenu opened={cxt_men_open} setOpened={setCxtMenOpen} top={cxt_coord.top} left={cxt_coord.left} cxtSel={cxtSel} />
      }

      {img_arr.map((img_data, ind) => (
        <DraggablePic img={img_data.img as string} img_ind={ind} img_w={img_data.width} img_h={img_data.height} cxtMenu={cxtMenu} />
      ))}
    </Box>
  )
}

export default DragDropPic;