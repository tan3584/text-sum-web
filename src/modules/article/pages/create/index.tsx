import { observer } from 'mobx-react-lite';
import React from 'react';
import 'draftail/dist/draftail.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import { Formik } from 'formik';
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';
import { CreateArticleDto } from 'modules/article/article.dto';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { convertFromRaw, convertToRaw } from 'draft-js';

const CreateArticlePage = () => {
  const [text, setText] = React.useState(() => EditorState.createEmpty());

  const handleSave = async (value: any) => {
    const convertedState = convertToRaw(text.getCurrentContent());

    const createArticleData: CreateArticleDto = {
      subject: '',
      description: value,
    };

    console.log({ convertedState, value });
  };

  return (
    <>
      <div className="draf-editor">
        <Formik
          initialValues={{ content: null }}
          onSubmit={(values) => {
            handleSave(values);
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            setFieldTouched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <Editor editorState={text} onChange={setText} />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default observer(CreateArticlePage);
