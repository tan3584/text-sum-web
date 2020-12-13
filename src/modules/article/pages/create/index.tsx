import { AuthenticationStoreContext } from '@/modules/authentication.store';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Editor from 'react-medium-editor';

const CreateArticlePage = () => {
  const authStore = React.useContext(AuthenticationStoreContext);
  const history = useHistory();

  const [text, setText] = React.useState({
    text: '',
  });

  const handleChange = (text: any, medium: any) => {
    setText(text);
  };

  return (
    <>
      <div className="app">
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
        <div>{text}</div>

        <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          text={text}
          onChange={handleChange}
          options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
        />
        <h3>Editor #2</h3>
        <Editor text={text} onChange={handleChange} />
      </div>
    </>
  );
};
