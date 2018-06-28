const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'hidden',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    position: 'relative',
    height: '64px',
    width: '64px',
    verticalAlign: 'top',
    borderRadius: '50%',
  },
  name: {
    textAlign: 'left',
    fontSize: '15px',
    color: '#4285f4',
    marginBottom: '6px',
    border: '1px',
    height: '20px',
  },
  feedback: {
    color: '#4285f4',
    fill: '#4285f4',
    display: 'flex',
  },
  description: {
    textAlign: 'left',
    fontSize: '14px',
  },
  listStyle: {
    width: '100%',
  },
  container: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  propContainer: {
    width: 100,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  skillCard: {
    width: 260,
    height: 170,
    minHeight: '150px',
    margin: '10px',
    overflow: 'hidden',
    justifyContent: 'center',
    fontSize: '10px',
    textAlign: 'center',
    display: 'inline-block',
    background: '#f2f2f2',
    borderRadius: '5px',
    backgroundColor: '#f4f6f6',
    border: '1px solid #eaeded',
    padding: '5px',
  },
  gridList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
    background: '#fff',
    height: '100px',
    marginBottom: '6px',
  },
  select: {
    margin: '0px 10px',
  },
  selection: {
    margin: '0px 10px',
    width: '200px',
  },
  newSkillBtn: {
    padding: '10px 0px 10px 10px',
  },
  example: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '138px',
    padding: '10px',
    verticalAlign: 'middle',
    display: 'block',
    color: 'black',
    maxHeight: '80px',
  },
  rating: {
    positive: 'relative',
    float: 'left',
  },
  totalRating: {
    fontSize: '13px',
    paddingLeft: '5px',
    color: '#108ee9',
  },
  topSkills: {
    width: '1090px',
    margin: 10,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '40px',
    marginRight: '10px',
    marginLeft: '20px',
  },
  sidebar: {
    width: 256,
    paddingTop: 50,
    display: 'block',
    zIndex: 2,
    border: '1px solid #ddd',
  },
  searchBar: {
    width: '100%',
    marginRight: '20px',
  },
  home: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  loader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 200,
  },
  starRefine: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '12px',
  },
  ratingLabel: {
    fontSize: '14px',
    marginLeft: '4px',
  },
  singleRating: {
    display: 'flex',
    cursor: 'pointer',
    width: 'fit-content',
  },
  clearButton: {
    marginLeft: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: 'fit-content',
  },
};

export default styles;
